import { Container, Card, Button } from "@/components/ui";

export const metadata = { title: "Thank You | SocialWorkDegreesNow" };

export default function ThankYouPage() {
  return (
    <main className="bg-slate-50">
      <Container>
        <div className="py-12">
          <Card className="mx-auto max-w-2xl p-8">
            <h1 className="text-3xl font-extrabold tracking-tight">Thanks — we’ve got your request.</h1>
            <p className="mt-3 text-slate-600">
              Next, we’ll send helpful next steps and connect you to programs that match your preferences.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/programs" variant="secondary">Browse programs</Button>
              <Button href="/blog" variant="primary">Read career guides</Button>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              If you need to update your information, submit the form again with the correct details.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
