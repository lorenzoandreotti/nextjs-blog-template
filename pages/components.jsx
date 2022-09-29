import Head from "next/head";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";

const Components = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Components | Next JS blog template</title>
        <meta
          name="description"
          content="Next JS blog template with tailwind CSS and Sanity CMS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-grow flex-col space-y-4 px-4">
        <h1 className="text-5xl font-bold text-primary">Components</h1>
        <details>
          <summary className="text-3xl font-semibold">Palette</summary>
          <div className="mt-4 flex w-fit overflow-hidden rounded">
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-primary"></div>
              <div className="h-16 w-16 bg-primary-focus"></div>
              <div className="h-16 w-16 bg-primary-hover"></div>
              <div className="h-16 w-16 bg-primary-active"></div>
              <div className="h-16 w-16 bg-primary-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-secondary"></div>
              <div className="h-16 w-16 bg-secondary-focus"></div>
              <div className="h-16 w-16 bg-secondary-hover"></div>
              <div className="h-16 w-16 bg-secondary-active"></div>
              <div className="h-16 w-16 bg-secondary-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-success"></div>
              <div className="h-16 w-16 bg-success-focus"></div>
              <div className="h-16 w-16 bg-success-hover"></div>
              <div className="h-16 w-16 bg-success-active"></div>
              <div className="h-16 w-16 bg-success-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-warning"></div>
              <div className="h-16 w-16 bg-warning-focus"></div>
              <div className="h-16 w-16 bg-warning-hover"></div>
              <div className="h-16 w-16 bg-warning-active"></div>
              <div className="h-16 w-16 bg-warning-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-danger"></div>
              <div className="h-16 w-16 bg-danger-focus"></div>
              <div className="h-16 w-16 bg-danger-hover"></div>
              <div className="h-16 w-16 bg-danger-active"></div>
              <div className="h-16 w-16 bg-danger-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-info"></div>
              <div className="h-16 w-16 bg-info-focus"></div>
              <div className="h-16 w-16 bg-info-hover"></div>
              <div className="h-16 w-16 bg-info-active"></div>
              <div className="h-16 w-16 bg-info-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-light"></div>
              <div className="h-16 w-16 bg-light-focus"></div>
              <div className="h-16 w-16 bg-light-hover"></div>
              <div className="h-16 w-16 bg-light-active"></div>
              <div className="h-16 w-16 bg-light-disabled"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-16 w-16 bg-dark"></div>
              <div className="h-16 w-16 bg-dark-focus"></div>
              <div className="h-16 w-16 bg-dark-hover"></div>
              <div className="h-16 w-16 bg-dark-active"></div>
              <div className="h-16 w-16 bg-dark-disabled"></div>
            </div>
          </div>
        </details>
        <details>
          <summary className="text-3xl font-semibold">Buttons</summary>
          <div className="mt-4 grid grid-flow-col grid-rows-2 gap-2">
            <LinkButton color="primary" text="primary" />
            <LinkButton color="primary" text="primary" disabled={true} />
            <LinkButton color="secondary" text="secondary" />
            <LinkButton color="secondary" text="secondary" disabled={true} />
            <LinkButton color="success" text="success" />
            <LinkButton color="success" text="success" disabled={true} />
            <LinkButton color="warning" text="warning" />
            <LinkButton color="warning" text="warning" disabled={true} />
            <LinkButton color="danger" text="danger" />
            <LinkButton color="danger" text="danger" disabled={true} />
            <LinkButton color="info" text="info" />
            <LinkButton color="info" text="info" disabled={true} />
            <LinkButton color="light" text="light" />
            <LinkButton color="light" text="light" disabled={true} />
            <LinkButton color="dark" text="dark" />
            <LinkButton color="dark" text="dark" disabled={true} />
          </div>
        </details>
        <details>
          <summary className="text-3xl font-semibold">Inputs</summary>
          <div className="mt-4 flex flex-col space-y-2">
            <label htmlFor="name">Input</label>
            <input type="text" id="name" />
            <label htmlFor="name">Text</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
            <div className="flex items-center">
              <input type="checkbox" name="" id="" />
              <label className="ml-2" htmlFor="">
                checkbox
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="" id="" />
              <label className="ml-2" htmlFor="">
                radio
              </label>
            </div>
          </div>
        </details>
        <details>
          <summary className="text-3xl font-semibold">Cards</summary>
          <div className="mt-4 grid grid-flow-row grid-cols-2 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </details>
      </main>
      <Footer />
    </div>
  );
};

export default Components;
