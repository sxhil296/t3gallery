export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/a28c8900-c565-4a7e-945a-bf7aabbe747a-vaoix6.png",
    "https://utfs.io/f/5c7a4c46-1b6a-4172-9065-c8e9fe4e0e47-vaoiwe.png",
    "https://utfs.io/f/a0b6dc59-c552-4537-844e-2ae7cbb29f94-vaoixz.png",
    "https://utfs.io/f/a15f9941-ebd7-42e5-a380-2ece0e1d94a3-vaoiup.png",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url: url,
  }));

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      <h1>Hello (t3gallery in progress)</h1>
    </main>
  );
}
