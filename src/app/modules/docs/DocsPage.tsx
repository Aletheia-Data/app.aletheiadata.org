import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PageDescription, PageTitle } from "../../../_start/layout/core";
import { Overview } from "./pages/gettings-started/Overview";
import { Accordion } from "./pages/base/Accordion";
import { Badges } from "./pages/base/Badges";
import { Breadcrumb } from "./pages/base/Breadcrumb";
import { Bullets } from "./pages/base/Bullets";
import { Buttons } from "./pages/base/buttons/Buttons";
import { Cards } from "./pages/base/Cards";
import { Carousel } from "./pages/base/Carousel";
import { Forms } from "./pages/base/Forms";
import { HelpersBackground } from "./pages/base/HelpersBackground";
import { HelpersBorders } from "./pages/base/HelpersBorders";
import { HelpersFlexLayout } from "./pages/base/HelpersFlexLayout";
import { HelpersText } from "./pages/base/HelpersText";
import { Indicator } from "./pages/base/Indicator";
import { Modal } from "./pages/base/Modal";
import { Overlay } from "./pages/base/Overlay";
import { Pagination } from "./pages/base/Pagination";
import { Pulse } from "./pages/base/Pulse";
import { Rating } from "./pages/base/Rating";
import { Rotate } from "./pages/base/Rotate";
import { Separator } from "./pages/base/Separator";
import { Symbol } from "./pages/base/Symbol";
import { Tables } from "./pages/base/Tables";
import { Tabs } from "./pages/base/Tabs";
import { Utilities } from "./pages/base/utilities/Utilities";
import { NouiSlider } from "./pages/base/NouiSlider";
import { BootstrapIcons } from "./pages/icons/BootstrapIcons";
import { DuotoneIcons } from "./pages/icons/DuotoneIcons";
// import { StockholmIcons } from "./pages/icons/StockholmIcons";
import { FontAwesomeIcons } from "./pages/icons/FontAwesomeIcons";
import { Changelog } from "./pages/gettings-started/Changelog";
import { CreatePage } from "./pages/gettings-started/CreatePage";
import { Deployment } from "./pages/gettings-started/Deployment";
import { Internationalization } from "./pages/gettings-started/Internationalization";
import { MockBackend } from "./pages/gettings-started/MockBackend";
import { References } from "./pages/gettings-started/References";
import { RTL } from "./pages/gettings-started/RTL";
import { SASSCustomization } from "./pages/gettings-started/SASSCustomization";
import { Skeleton } from "./pages/gettings-started/Skeleton";
import { Updates } from "./pages/gettings-started/Updates";
import { QuickStart } from "./pages/gettings-started/QuickStart";
import { LineAwesomeIcons } from "./pages/icons/LineAwesomeIcons";

const DocsPage = () => {
  return (
    <div className="card card-custom">
      <div className="card-body p-10 p-lg-15">
        <Switch>
          <Route path="/docs/overview">
            <PageTitle>Overview</PageTitle>
            <Overview />
          </Route>
          <Route path="/docs/changelog">
            <PageTitle>Changelog</PageTitle>
            <Changelog />
            <PageDescription>version and update info</PageDescription>
          </Route>
          <Route path="/docs/create-a-page">
            <PageTitle>Create a page</PageTitle>
            <CreatePage />
          </Route>
          <Route path="/docs/deployment">
            <PageTitle>Deployment</PageTitle>
            <Deployment />
          </Route>
          <Route path="/docs/i18n">
            <PageTitle>Internationalization (i18n)</PageTitle>
            <Internationalization />
          </Route>
          <Route path="/docs/mock-backend">
            <PageTitle>Mock Back-end</PageTitle>
            <MockBackend />
          </Route>
          <Route path="/docs/quick-start">
            <PageTitle>Quick Start</PageTitle>
            <QuickStart />
          </Route>
          <Route path="/docs/references">
            <PageTitle>References</PageTitle>
            <References />
          </Route>
          <Route path="/docs/updates">
            <PageTitle>Updates</PageTitle>
            <Updates />
          </Route>
          <Route path="/docs/rtl">
            <PageTitle>RTL</PageTitle>
            <RTL />
          </Route>
          <Route path="/docs/sass-customization">
            <PageTitle>SASS Customization</PageTitle>
            <SASSCustomization />
          </Route>
          <Route path="/docs/skeleton">
            <PageTitle>Skeleton</PageTitle>
            <Skeleton />
          </Route>
          <Route path="/docs/accordion">
            <PageTitle>Accordion</PageTitle>
            <Accordion />
            <PageDescription>accordion elements</PageDescription>
          </Route>
          <Route path="/docs/badges">
            <PageTitle>Basges</PageTitle>
            <Badges />
            <PageDescription>badge elements</PageDescription>
          </Route>
          <Route path="/docs/breadcrumb">
            <PageTitle>Breadcrumb</PageTitle>
            <Breadcrumb />
            <PageDescription>breadcrumb elements</PageDescription>
          </Route>
          <Route path="/docs/bullets">
            <PageTitle>Bullets</PageTitle>
            <Bullets />
            <PageDescription>bullets elements</PageDescription>
          </Route>
          <Route path="/docs/buttons">
            <PageTitle>Buttons</PageTitle>
            <PageDescription>buttons elements</PageDescription>
            <Buttons />
          </Route>
          <Route path="/docs/cards">
            <PageTitle>Cards</PageTitle>
            <Cards />
            <PageDescription>card elements</PageDescription>
          </Route>
          <Route path="/docs/carousel">
            <PageTitle>Carousel</PageTitle>
            <Carousel />
            <PageDescription>carousel elements</PageDescription>
          </Route>
          <Route path="/docs/forms">
            <PageTitle>Forms</PageTitle>
            <Forms />
            <PageDescription>forms elements</PageDescription>
          </Route>
          <Route path="/docs/helpers/background">
            <PageTitle>Background</PageTitle>
            <HelpersBackground />
            <PageDescription>extended background classes</PageDescription>
          </Route>
          <Route path="/docs/helpers/borders">
            <PageTitle>Borders</PageTitle>
            <HelpersBorders />
            <PageDescription>extended borders classes</PageDescription>
          </Route>
          <Route path="/docs/helpers/flex-layout">
            <PageTitle>Flex Layout</PageTitle>
            <HelpersFlexLayout />
            <PageDescription>extended flex layout classes</PageDescription>
          </Route>
          <Route path="/docs/helpers/text">
            <PageTitle>Text</PageTitle>
            <HelpersText />
            <PageDescription>extended text classes</PageDescription>
          </Route>
          <Route path="/docs/indicator">
            <PageTitle>Indicator</PageTitle>
            <Indicator />
            <PageDescription>indicator element</PageDescription>
          </Route>
          <Route path="/docs/modal">
            <PageTitle>Modal</PageTitle>
            <Modal />
            <PageDescription>modal elements</PageDescription>
          </Route>
          <Route path="/docs/overlay">
            <PageTitle>Overlay</PageTitle>
            <Overlay />
            <PageDescription>overlay elements</PageDescription>
          </Route>
          <Route path="/docs/pagination">
            <PageTitle>Pagination</PageTitle>
            <Pagination />
            <PageDescription>pagination elements</PageDescription>
          </Route>
          <Route path="/docs/pulse">
            <PageTitle>Pulse</PageTitle>
            <Pulse />
            <PageDescription>pulse elements</PageDescription>
          </Route>
          <Route path="/docs/rating">
            <PageTitle>Rating</PageTitle>
            <Rating />
            <PageDescription>rating component</PageDescription>
          </Route>
          <Route path="/docs/rotate">
            <PageTitle>Rotate</PageTitle>
            <Rotate />
            <PageDescription>Rotate element</PageDescription>
          </Route>
          <Route path="/docs/separator">
            <PageTitle>Separator</PageTitle>
            <Separator />
            <PageDescription>separator elements</PageDescription>
          </Route>
          <Route path="/docs/symbol">
            <PageTitle>Symbol</PageTitle>
            <Symbol />
            <PageDescription>symbol elements</PageDescription>
          </Route>
          <Route path="/docs/tables">
            <PageTitle>Tables</PageTitle>
            <Tables />
            <PageDescription>extended bootstrap tables</PageDescription>
          </Route>
          <Route path="/docs/tabs">
            <PageTitle>Tabs</PageTitle>
            <Tabs />
            <PageDescription>tabs elements</PageDescription>
          </Route>
          <Route path="/docs/utilities">
            <PageTitle>Utilities</PageTitle>
            <PageDescription>extended utility classes</PageDescription>
            <Utilities />
          </Route>
          <Route path="/docs/nouislider">
            <PageTitle>noUISlider</PageTitle>
            <NouiSlider />
          </Route>
          <Route path="/docs/icons/bootstrap">
            <PageTitle>Bootstrap Icons</PageTitle>
            <BootstrapIcons />
            <PageDescription>
              free, high quality, open source icon library
            </PageDescription>
          </Route>
          <Route path="/docs/icons/duotone">
            <PageTitle>Duotone</PageTitle>
            <DuotoneIcons />
            <PageDescription>duotone svg icons</PageDescription>
          </Route>
          {/* <Route path="/docs/icons/stockholm">
            <PageTitle>Stockholm</PageTitle>
            <StockholmIcons />
            <PageDescription>stockholm svg icon set</PageDescription>
          </Route> */}
          <Route path="/docs/icons/fontawesome">
            <PageTitle>Font Awesome Icons</PageTitle>
            <FontAwesomeIcons />
            <PageDescription>awesome font icons</PageDescription>
          </Route>
          <Route path="/docs/icons/lineawesome">
            <PageTitle>Line Awesome Icons</PageTitle>
            <LineAwesomeIcons />
            <PageDescription>line font icons</PageDescription>
          </Route>
          <Redirect from="/docs" exact={true} to="/docs/quick-start" />
          <Redirect to="/docs/quick-start" />
        </Switch>
      </div>
    </div>
  );
};

export { DocsPage };
