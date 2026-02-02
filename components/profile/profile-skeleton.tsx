import { Card, CardContent, CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export const ProfileSkeleton = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-2 py-8">
        <Skeleton className="h-24 w-24 rounded-full" />
        <Skeleton className="h-8 w-48 mt-2" />
        <Skeleton className="h-4 w-32" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 border-t pt-6">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
};
