import order from "../../assets/sidebaricons/order.svg";
import rca from "../../assets/sidebaricons/rca.svg";
import nft from "../../assets/sidebaricons/manage.svg";
import feature from "../../assets/sidebaricons/feature.svg";
// import trend from "../../assets/sidebaricons/trend.svg";
// import hot from "../../assets/sidebaricons/hot.svg";
// import live from "../../assets/sidebaricons/live.svg";
const SideBarArray = [
  {
    text: "Dashboard",
    icon: feature,
    route: "dashboard",
  },
  {
    text: "Complaint Management",
    icon: order,
    route: "complaintlist",
  },
  {
    text: "User Management",
    icon: feature,
    route: "userlist",
  },
];

export default SideBarArray;
