import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Power BI",
  subTitle: "Business Intelligence for Beginners to Advance",
  imageUrl:
    "https://pei.com/wp-content/uploads/2016/08/maxresdefaultreduced.jpg",
  detail:
    "Learn to create stunning Dashboards and Reports using Microsoft's free Business Intelligence / Analytics tool, Power BI.",
  requirements: [
    `Absolutely no experience is required. We will start from the basics and gradually build up your knowledge with clear and concise step by step instructions`,
    `A computer with internet connection.`,
    ` Passion and curiosity to learn something new and do hand-on projects live`,
  ],
  description:
    "Anyone looking to get a job and prepare to start data analytics career.",
  isDetailedSyllabus: true,
  syllabus: [
    {
      title: "Module 1 - Power BI Introduction",
      topics: [
        "Introduction to Power BI Desktop",
        "Getting data (Excel and RDBMS, Web, SharePoint)",
        "Naming for Q&A",
        "Direct Query vs Import data",
      ],
    },
    {
      title: "Module 2 - Modeling with Power BI",
      topics: [
        "Introduction to Modelling",
        "Set up and Manager relationships",
        "Cardinality and cross filtering",
        "Creating hierarchy in the model",
        "Default summarization and sort by",
        "Creating calculated columns",
        "Creating measures and quick measures",
      ],
    },
    {
      title: "Module 3 - Power BI Desktop Visualizations",
      topics: [
        "Creating visuals",
        "Colour and conditional formatting",
        "Setting sort order",
        "Scatter and bubble charts and play axis",
        "Tool tips",
        "Slicers, timeline Slicers and sync Slicers",
        "cross filtering and highlighting",
        "Visual, Page and Report level filters",
        "Drill down/up",
      ],
    },
    {
      title: "Module 4 -DAX Expressions",
      topics: [
        "Introduction to Dax (how to write Dax and basic functions in Power BI)",
        "Important Dax used in Power BI along with its applications.",
        "how to create calculated columns and measures in Power BI and difference in its application",
        "Scenarios with Questions on Dax & explanation",
        "Creating date dimension in Power BI using calendar functions and its importance",
      ],
    },
    {
      title: "Module 5 - Publishing and Sharing",
      topics: [
        "Sharing options",
        "Publish from Power BI Desktop",
        "Publish reports to Web",
        "Sharing reports and Dashboards",
        "Workspaces",
        "Apps",
        "Printing, PDF’s and exports",
        "Row level Security",
        "Exporting data from Visualizations Refreshing Datasets",
        "Understanding data refresh",
        "Gateways",
      ],
    },
    {
      title: "Module 6: Projects",
      topics: [
        "Healthcare Analytics",
        "Finance Analytics",
        "HR Analytics",
        "E-commerce Analytics",
        "IPL Data Analytics",
        "Football Data Dashboard",
        "Salary Dashboard",
      ],
    },
  ],
};

const PowerBI = () => <CourseBody data={data} />;

export default PowerBI;
