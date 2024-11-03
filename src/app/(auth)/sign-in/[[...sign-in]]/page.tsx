import Container from "@/components/ui/container";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex h-full items-center justify-center">
      <Container className="flex items-center justify-center">
        <SignIn />
      </Container>
    </section>
  );
}
