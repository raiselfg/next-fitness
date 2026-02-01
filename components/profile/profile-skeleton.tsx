import { Card, CardContent, CardHeader } from '../ui/card';

export const ProfileSkeleton = () => {
  return (
    <Card className="animate-pulse">
      <CardHeader className="flex flex-col items-center gap-2 py-8">
        <div className="h-24 w-24 rounded-full bg-muted" />
        <div className="h-8 w-48 bg-muted rounded mt-2" />
        <div className="h-4 w-32 bg-muted rounded" />
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 border-t pt-6">
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-muted rounded" />
            <div className="h-4 w-24 bg-muted rounded" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-16 bg-muted rounded" />
            <div className="h-4 w-24 bg-muted rounded" />
          </div>
        </div>
        <div className="h-10 w-full bg-muted rounded pt-2" />
      </CardContent>
    </Card>
  );
};
