import App from '../App.jsx';
import ErrorPage from '../errorPage/error-page.jsx';
import Layout from '../layout/Layout.jsx';
import ProjectsPage from '../components/projectsPage/ProjectsPage.jsx';
import Contact from '../components/contact/Contact.jsx';
import ProjectTemplate from '../components/projectTemplate/ProjectTemplate .jsx';
import DefaultProject from '../components/projectTemplate/DefaultProject.jsx';

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'projects',
    element: (
      <Layout>
        <ProjectsPage />
      </Layout>
    ),
    children: [
      { index: true, element: <DefaultProject /> },
      { path: ":projectId", element: <ProjectTemplate /> }
    ],
  },
  {
    path: 'contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    )
  },
];

export default routes;
