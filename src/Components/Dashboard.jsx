import React, { useContext } from "react";

import {DashboardContext} from "../Contexts/DashboardContext"

import styles from "./Dashboard.module.css";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { ImStatsBars } from "react-icons/im";
import { FaMapSigns } from "react-icons/fa";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { GiFiles } from "react-icons/gi";
import { MdSettings } from "react-icons/md";

import { Button, ButtonGroup } from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";

const Dashboard = () => {

    const {handlemode, color} = useContext(DashboardContext);


  return (
    <div className={styles.box}>
      <div className={color === "white" ? styles.box1 : styles.darkbox1}>
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="">
                <img
                  className={styles.profilepic}
                  src="data:image/jpeg;base64,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"
                />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.stats} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink
                href=""
                boxSizing="border-box"
                padding="10% 140% 10% 140%"
                marginLeft="-140%"
              >
                <Icon as={ImStatsBars} />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.icon} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink
                href=""
                boxSizing="border-box"
                padding="10% 140% 10% 140%"
                marginLeft="-140%"
              >
                <Icon as={FaMapSigns} />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.icon} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink
                href=""
                boxSizing="border-box"
                padding="10% 140% 10% 140%"
                marginLeft="-140%"
              >
                <Icon as={RiShoppingBasket2Fill} />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.icon} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink
                href=""
                boxSizing="border-box"
                padding="10% 140% 10% 140%"
                marginLeft="-140%"
              >
                <Icon as={MdOutlineMessage} />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.icon} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink
                href=""
                boxSizing="border-box"
                padding="10% 140% 10% 140%"
                marginLeft="-140%"
              >
                <Icon as={GiFiles} />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.icon} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink
                href=""
                boxSizing="border-box"
                padding="10% 140% 10% 140%"
                marginLeft="-140%"
              >
                <Icon as={MdSettings} />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Breadcrumb className={styles.btn} pt="3">
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Button
                  marginTop="40px"
                  colorScheme="teal"
                  fontSize="22px"
                  w="20px"
                  h="40px"
                  borderRadius="50%"
                >
                  +
                </Button>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </div>



      <div className={color === "white" ? styles.box2 : styles.darkbox2}>
          <div>
        <Breadcrumb separator="" textAlign="left">
          <BreadcrumbItem>
            <BreadcrumbLink fontSize="24px">My Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem marginLeft="50px">
            <BreadcrumbLink href="#">
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0" fontSize="14px">
                  {color === "white" ? "Dark Mode" : "Light Mode"} 
                </FormLabel>
                <Switch onChange={(e) => handlemode(e.target.checked)} id="email-alerts" size="lg" />
              </FormControl>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        </div>


        <div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
