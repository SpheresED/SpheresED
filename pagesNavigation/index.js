import { useRoute } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import InstitutionCourses from "../src/screens/InstitutionCourses";
import InstitutionDepartments from "../src/screens/InstitutionDepartments";

export default function PageNavigation(props) {
  const info = props.data;

  return <InstitutionPageTabs information={info} />;
}

const Tab = createMaterialTopTabNavigator();

function InstitutionPageTabs(props) {
  const data = props.information;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "#002F47",
        tabBarIndicatorStyle: { backgroundColor: "#002F47" },
        tabBarStyle: { height: 40 },
        tabBarContentContainerStyle: { height: 40 },
      }}
    >
      <Tab.Screen
        name="Courses"
        component={InstitutionCourses}
        initialParams={data}
      />
      <Tab.Screen
        name="Departments"
        component={InstitutionDepartments}
        initialParams={data}
      />
    </Tab.Navigator>
  );
}
