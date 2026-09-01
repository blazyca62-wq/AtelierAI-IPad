export default {
  async fetch(request, env) {
    const allowedOrigins = new Set([
      "https://blazyca62-wq.github.io"
    ]);

    const origin = request.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": allowedOrigins.has(origin) ? origin : "https://blazyca62-wq.github.io",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== "POST") {
      return json({ error: "Nur POST erlaubt." }, 405, cors);
    }
    if (!allowedOrigins.has(origin)) {
      return json({ error: "Diese Herkunft ist nicht erlaubt." }, 403, cors);
    }
    if (!env.OPENAI_API_KEY) {
      return json({ error: "OPENAI_API_KEY Secret fehlt auf dem Worker." }, 500, cors);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Ungültige Anfrage." }, 400, cors);
    }

    const { image, question, medium } = body || {};
    if (!image || typeof image !== "string" || !image.startsWith("data:image/")) {
      return json({ error: "Bild fehlt." }, 400, cors);
    }

    // Schutz vor sehr großen Requests.
    if (image.length > 8_000_000) {
      return json({ error: "Bild ist zu groß." }, 413, cors);
    }

    const userQuestion = String(question || "").slice(0, 3000);
    const mediumName = medium === "oil" ? "Ölmalerei" : "Aquarellmalerei";

    const systemPrompt =
`Du bist der AI-Malberater von AtelierAI. Du analysierst Referenzfotos für Maler.
Arbeite praktisch, konkret und bildbezogen. Malweise: ${mediumName}.
Antworte auf Deutsch.
Bevorzuge wenige klare Schritte statt Theorie.
Beurteile insbesondere:
- große Formen und Komposition
- Tonwerte: hell, mittel, dunkel
- warme und kalte Hauptbereiche
- wichtige Farbfamilien und konkrete Mischideen
- sinnvolle Reihenfolge beim Malen
- welche Details zuletzt wichtig sind
Bei Aquarell: Papierweiß, transparente Schichten, von hell nach dunkel und Lasuren beachten.
Bei Öl: große Massen, Tonwerte, Farbmischung, Kanten und mögliche Schlusslasuren beachten.
Behaupte keine Farbnamen oder Bilddetails, die du nicht wirklich im Bild erkennen kannst.`;

    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        store: false,
        instructions: systemPrompt,
        input: [{
          role: "user",
          content: [
            { type: "input_text", text: userQuestion || "Analysiere dieses Bild als Malvorlage und gib mir die sinnvollsten nächsten Malschritte." },
            { type: "input_image", image_url: image, detail: "high" }
          ]
        }],
        max_output_tokens: 1200
      })
    });

    const data = await openaiResponse.json().catch(() => ({}));
    if (!openaiResponse.ok) {
      const msg = data?.error?.message || `OpenAI Fehler ${openaiResponse.status}`;
      return json({ error: msg }, 502, cors);
    }

    const answer =
      data.output_text ||
      (Array.isArray(data.output)
        ? data.output.flatMap(x => x.content || []).filter(x => x.type === "output_text").map(x => x.text).join("\n")
        : "");

    return json({ answer: answer || "Keine Textantwort erhalten." }, 200, cors);
  }
};

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      ...cors,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
