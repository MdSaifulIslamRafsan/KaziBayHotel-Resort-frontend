import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">

        <div className="relative w-full aspect-[5/2] mb-2">

          <svg
            viewBox="0 0 500 200"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <mask id="text-mask">
                <rect width="100%" height="100%" fill="black" />

                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="200"
                  fontWeight="800"
                  fill="white"
                >
                  404
                </text>
              </mask>
            </defs>

            <foreignObject
              width="100%"
              height="100%"
              mask="url(#text-mask)"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/video/not-found.mp4" type="video/mp4" />
              </video>
            </foreignObject>
          </svg>

        </div>


        <h1 className="mb-2 text-2xl lg:text-3xl font-bold">Oops! Page Not Found</h1>

        <p className="mb-6 text-secondary-foreground ">
         We {`can't`} locate the page {`you're`} searching for. It might have been moved, renamed, or temporarily unavailable.
        </p>

        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild>
            <Link href="/" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>


        </div>
      </div>
    </div>
  );
}