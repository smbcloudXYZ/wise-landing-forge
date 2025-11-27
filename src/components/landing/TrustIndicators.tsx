const stats = [
  { value: "16M+", label: "Customers worldwide" },
  { value: "$12B", label: "Transferred every month" },
  { value: "70+", label: "Countries supported" },
  { value: "50+", label: "Currencies available" },
];

const TrustIndicators = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl md:text-5xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
