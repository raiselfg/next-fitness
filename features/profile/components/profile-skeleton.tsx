import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const ProfileSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <Card className="border-none shadow-md">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <Skeleton className="h-[100px] w-[100px] rounded-full" />
            <div className="flex-1 text-center md:text-left space-y-4 w-full md:w-auto">
              <div className="space-y-2 flex flex-col items-center md:items-start">
                <Skeleton className="h-8 w-48" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
              </div>
              <Skeleton className="h-10 w-24 mx-auto md:mx-0" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grid Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="shadow-sm">
            <CardHeader className="pb-3 border-b">
              <div className="flex items-center gap-2">
                <Skeleton className="w-5 h-5 rounded-sm" />
                <Skeleton className="h-6 w-32" />
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className="flex justify-between items-center py-1">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-4 h-4 rounded-sm" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
