import Banner from '@/app/signup/_components/Banner';
import SignUpForm from './_components/SignUpForm';

function Page() {
  return (
    <section className="flex flex-col justify-between bg-white h-full mb-safe">
      <div>
        <Banner />
        <SignUpForm />
      </div>
    </section>
  );
}

export default Page;
