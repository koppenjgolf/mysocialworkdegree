import { Container, Card } from "@/components/ui";

export const metadata = { title: "Privacy Policy | SocialWorkDegreesNow" };

export default function PrivacyPage() {
  return (
    <main>
      <Container>
        <div className="py-12">
          <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Replace this template with your actual policy and have counsel review it for compliance (including TCPA, CAN-SPAM, and state privacy laws).
          </p>

          <Card className="mt-8 p-6">
            <h2 className="text-lg font-extrabold">What we collect</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
              <li>Contact information (name, email, optional phone)</li>
              <li>Preferences (degree level, modality, timeline, state)</li>
              <li>Basic analytics (page views, UTM parameters)</li>
            </ul>

            <h2 className="mt-6 text-lg font-extrabold">How we use it</h2>
            <p className="mt-2 text-sm text-slate-600">
              To provide program matches, respond to requests, improve site performance, and (if applicable) share with partner institutions as described at the point of collection.
            </p>

            <h2 className="mt-6 text-lg font-extrabold">Your choices</h2>
            <p className="mt-2 text-sm text-slate-600">
              Provide opt-out instructions and a contact email. Include how users can request deletion where applicable.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
