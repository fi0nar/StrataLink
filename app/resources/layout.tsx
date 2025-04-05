export default function ResourcesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="p-6 bg-gray-50 min-h-screen">
        {children}
      </section>
    );
  }
  