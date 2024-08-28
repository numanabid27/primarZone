import "./globals.css";
import LandingLayout from "./(landing)/layout";
import HomePage from "./(landing)/page";

export default function Home() {
  return (
    <LandingLayout>
      <HomePage />
    </LandingLayout>
  );
}
