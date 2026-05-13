import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/templates/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="flex-1 flex items-center justify-center py-20 bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3 text-foreground">
            404
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
