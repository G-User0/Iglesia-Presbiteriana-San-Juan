import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Skeleton */}
      <div className="relative w-full h-[50vh] bg-muted/30 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-12 w-3/4 max-w-xl mx-auto mb-4" />
          <Skeleton className="h-6 w-2/4 max-w-md mx-auto" />
        </div>
      </div>

      {/* Navigation Skeleton */}
      <div className="py-8 bg-muted/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-full max-w-md" />
            <Skeleton className="h-10 w-28" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info Skeleton */}
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-8 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-5 w-1/2" />
                  </div>
                  <div className="space-y-2 pt-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div>
              <div className="border rounded-lg overflow-hidden">
                <div className="p-6 space-y-6">
                  <Skeleton className="h-7 w-1/2 mb-6" />

                  <div className="flex flex-col items-center space-y-2">
                    <Skeleton className="h-32 w-32 rounded-full" />
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Skeleton className="h-32 w-32 rounded-full" />
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-32" />
                  </div>

                  <div className="pt-6 mt-6 border-t border-border">
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden mt-6">
                <div className="p-6 space-y-4">
                  <Skeleton className="h-7 w-1/2" />
                  <div className="bg-muted/20 rounded-lg p-4">
                    <Skeleton className="h-5 w-full mb-2" />
                    <Skeleton className="h-5 w-full" />
                  </div>
                  <Skeleton className="h-10 w-full mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
