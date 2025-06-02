import dynamic from "next/dynamic"

// Importar el componente de manera dinámica (lazy loading)
const TestimonialsSection = dynamic(() => import("./testimonials-section"), {
  loading: () => (
    <div className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
        </div>
        <div className="flex overflow-x-hidden gap-6 py-4 px-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="inline-block w-[600px] flex-shrink-0 bg-muted rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false, // Desactivar SSR para este componente
})

export default TestimonialsSection
