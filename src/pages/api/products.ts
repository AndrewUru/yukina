import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.resolve("./src/data/products.json");
    const data = await fs.readFile(filePath, "utf-8");
    return new Response(data, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error al obtener los productos" }),
      { status: 500 },
    );
  }
}
