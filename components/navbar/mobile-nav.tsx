"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
// import { ViewVerticalIcon } from "@radix-ui/react-icons";

import { MainNavItem, SidebarNavItem } from "@/types/nav";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const docsConfig: DocsConfig = {
    mainNav: [
      {
        title: "Over ons",
        href: "/about",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
    sidebarNav: [
      {
        title: "test",
        items: [
          {
            title: "test",
            href: "/living/renting-an-apartment",
            items: [],
          },
          {
            title: "test",
            href: "/living/buying-an-apartment",
            items: [],
          },
          {
            title: "test",
            href: "/living/buying-renting-a-house-or-villa",
            items: [],
          },
        ],
      },
      {
        title: "test",
        items: [
          {
            title: "test",
            href: "/work/remote-work",
            items: [],
          },
          {
            title: "test",
            href: "/work/working-in-thailand",
            items: [],
          },
          {
            title: "test",
            href: "/work/company-setup",
            items: [],
          },
        ],
      },
    ],
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <SheetTitle>
          {" "}
          <MobileLink
            href="/"
            className="flex pl-2 items-center gap-2"
            onOpenChange={setOpen}
          >
            <Image
              // onClick={() => router.push("/")}
              priority
              className="h-7 w-7 cursor-pointer mb-2"
              src="/logo/Smile_logo_update_1.png"
              height={28}
              width={28}
              alt="logo"
            />
            <span className="font-bold inline-block">Smart Move Asia</span>
          </MobileLink>
        </SheetTitle>
        <SheetDescription className="px-2">"test"</SheetDescription>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-2">
          <div className="flex flex-col space-y-3">
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    className="text-lg"
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-normal text-lg">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
