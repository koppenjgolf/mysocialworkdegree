import { Container, Card } from "@/components/ui";

export const metadata = { title: "Terms | SocialWorkDegreesNow" };

export default function TermsPage() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-extrabold tracking-tight">Terms</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Replace this template with your actual terms and have counsel review it. Include disclaimers about program availability and accreditation checks.
          </p>

          <Card className="mt-8 p-6">
            <h2 className="text-lg font-extrabold">Key points</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
              <li>Information on this site is for general informational purposes</li>
              <li>Users are responsible for verifying accreditation, tuition, and admissions requirements</li>
              <li>Limitations of liability and dispute resolution (as appropriate)</li>
            </ul>
          </Card>
        </div>
      </Container>
    </main>
  );
}
