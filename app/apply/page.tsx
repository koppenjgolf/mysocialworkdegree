import Link from "next/link";
import { Container, Card, Button, Badge } from "@/components/ui";

export const metadata = {
  title: "Get Matched With Social Work Programs | MySocialworkDegree.com",
  description: "Request program matches by state, timeline, degree level, and modality. Takes about 45 seconds.",
};

export default function ApplyLandingPage() {
  return (
    <main className="bg-white">
      <Container>
        <div className="py-12">
          <Badge>Match request</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">Get matched with social work programs</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Answer a few quick questions and we’ll connect you with programs that fit your goals (degree level, online/hybrid/campus, and location).
          </p>

          <Card className="mt-8 p-6">
            <div className="text-lg font-extrabold">Start your request</div>
            <p className="mt-2 text-sm text-slate-600">
              The form takes about 45 seconds.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/apply/form" variant="primary">Start the form</Button>
              <Button href="/programs" variant="secondary">Browse programs</Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              By submitting, you agree to our Privacy Policy and Terms.
            </p>
          </Card>

          <div className="mt-8 text-sm text-slate-600">
            <Link className="underline" href="/privacy">Privacy Policy</Link>
            <span className="mx-2">•</span>
            <Link className="underline" href="/terms">Terms</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
