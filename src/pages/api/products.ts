export async function GET() {
  const url = "https://www.alvafusiondesigns.com/wp-json/wc/v3/products";
  const consumerKey = "ck_2ef54305a84705add80d08544d8d39383283d485";
  const consumerSecret = "cs_8f282e44597098c5b27d20726252cfa942d39017";

  // Autenticación básica (Base64)
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64",
  );

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: `Error ${res.status}: ${res.statusText}` }),
        { status: res.status },
      );
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al obtener los productos" }),
      { status: 500 },
    );
  }
}
