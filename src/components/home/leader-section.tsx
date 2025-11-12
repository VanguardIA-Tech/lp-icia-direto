import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function LeaderSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Liderança e Experiência
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Conheça Jorge Antonio Auad Filho, um líder com vasta experiência
                e dedicação em transformar a gestão pública e privada.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-blue-500" />
                Mais de 20 anos de experiência em gestão.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-blue-500" />
                Foco em eficiência e resultados.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-blue-500" />
                Compromisso com a inovação e transparência.
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/about">
                <Button>Saiba Mais</Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
            <Image
              src="/jorg5.webp"
              alt="Jorge Antonio Auad Filho"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}