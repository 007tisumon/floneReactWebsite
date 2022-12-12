import React from "react";
import Breadcrumbs from "../breacrumbs/Breadcrumbs";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import {  ExpandMore } from "@mui/icons-material";
import EditProfile from "./EditProfile";
import EditPassword from './EditPassword';
import EditAddress from "./EditAddress";

const Profile = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Breadcrumbs />
      <div className="lg:w-[60%] w-[80%]  md:max-w-[70%] mx-auto space-y-5">
        <Accordion
          className=" shadow-none"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            className=" bg-gray-100 "
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className="uppercase text-sm">
              1. Edit your account information
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white border">
            <EditProfile />
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="shadow-none"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            className=" bg-gray-100 "
            expandIcon={<ExpandMore />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className="uppercase text-sm">
              2. Change your password
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white border">
            <EditPassword />
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="shadow-none "
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            className=" bg-gray-100 "
            expandIcon={<ExpandMore />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className="uppercase text-sm">
              3. modify your address book entries
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-white border">
            <EditAddress />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Profile;
