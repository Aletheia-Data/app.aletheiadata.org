/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";

export interface PageLink {
  title: string;
  path: string;
  isActive: boolean;
  isPro?: boolean;
}

export interface PageDataContextModel {
  moduleName?: string;
  setModuleName: (_moduleName: string) => void;
  pageTitle?: string;
  setPageTitle: (_title: string) => void;
  pageDescription?: string;
  setPageDescription: (_description: string) => void;
  pageBreadcrumbs?: Array<PageLink>;
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => void;
  pageSubmenu?: Array<PageLink>;
  setPageSubmenu: (_submenu: Array<PageLink>) => void;
}

const PageDataContext = createContext<PageDataContextModel>({
  setModuleName: (_moduleName: string) => {},
  setPageSubmenu: (_submenu: Array<PageLink>) => {},
  setPageTitle: (_title: string) => {},
  setPageBreadcrumbs: (_breadcrumbs: Array<PageLink>) => {},
  setPageDescription: (_description: string) => {},
});

const PageDataProvider: React.FC = ({ children }) => {
  const [moduleName, setModuleName] = useState<string>("");
  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<Array<PageLink>>([]);
  const [pageSubmenu, setPageSubmenu] = useState<Array<PageLink>>([]);
  const value: PageDataContextModel = {
    moduleName,
    setModuleName,
    pageTitle,
    setPageTitle,
    pageDescription,
    setPageDescription,
    pageBreadcrumbs,
    setPageBreadcrumbs,
    pageSubmenu,
    setPageSubmenu,
  };
  return (
    <PageDataContext.Provider value={value}>
      {children}
    </PageDataContext.Provider>
  );
};

function usePageData() {
  return useContext(PageDataContext);
}

type Props = {
  title?: string;
  description?: string;
  submenu?: Array<PageLink>;
  breadcrumbs?: Array<PageLink>;
};

const PageDataContainer: React.FC<Props> = ({
  submenu,
  breadcrumbs,
  children,
}) => {
  const { setPageBreadcrumbs, setPageSubmenu } = usePageData();

  useEffect(() => {
    if (breadcrumbs) {
      setPageBreadcrumbs(breadcrumbs);
    }

    if (submenu) {
      setPageSubmenu(submenu);
    }

    return () => {
      setPageBreadcrumbs(new Array<PageLink>());
      setPageSubmenu(new Array<PageLink>());
    };
  }, []);
  return <>{children}</>;
};

const PageTitle: React.FC = ({ children }) => {
  const { setPageTitle } = usePageData();
  useEffect(() => {
    if (children) {
      setPageTitle(children.toString());
    }
    return () => {
      setPageTitle("");
    };
  }, [children]);
  return <></>;
};

const PageDescription: React.FC = ({ children }) => {
  const { setPageDescription } = usePageData();
  useEffect(() => {
    if (children) {
      setPageDescription(children.toString());
    }
    return () => {
      setPageDescription("");
    };
  }, [children]);
  return <></>;
};

const ModuleName: React.FC = ({ children }) => {
  const { setModuleName } = usePageData();
  useEffect(() => {
    if (children) {
      setModuleName(children.toString());
    }
    return () => {
      setModuleName("");
    };
  }, [children]);
  return <></>;
};

export {
  ModuleName,
  PageDescription,
  PageTitle,
  PageDataContainer,
  PageDataProvider,
  usePageData,
};
