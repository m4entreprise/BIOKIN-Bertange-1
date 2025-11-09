import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description: string;
  canonical?: string;
};

const setMetaTag = (key: "name" | "property", value: string, content: string) => {
  if (!content) return;
  let element = document.querySelector<HTMLMetaElement>(`meta[${key}='${value}']`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(key, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonicalLink = (href: string) => {
  if (!href) return;
  let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

export const usePageMetadata = ({ title, description, canonical }: PageMetadata) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (canonical) {
      setCanonicalLink(canonical);
    }
  }, [title, description, canonical]);
};
