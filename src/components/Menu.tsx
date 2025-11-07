import Link from "next/link";
import {
  HomeIcon,
  TeacherIcon,
  StudentIcon,
  ParentIcon,
  SubjectIcon,
  ClassIcon,
  LessonIcon,
  ExamIcon,
  AssignmentIcon,
  ResultIcon,
  AttendanceIcon,
  EventIcon,
  MessageIcon,
  AnnouncementIcon,
  ProfileIcon,
  SettingIcon,
  LogoutIcon,
} from "@/components/Icons";
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <HomeIcon />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <TeacherIcon />,
        label: "Teachers",
        href: "/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: <StudentIcon />,
        label: "Students",
        href: "/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: <ParentIcon />,
        label: "Parents",
        href: "/parent",
        visible: ["admin", "teacher"],
      },
      {
        icon: <SubjectIcon />,
        label: "Subject",
        href: "/subjects",
        visible: ["admin"],
      },
      {
        icon: <ClassIcon />,
        label: "Classes",
        href: "/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <LessonIcon />,
        label: "Lessons",
        href: "/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <ExamIcon />,
        label: "Exams",
        href: "/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AssignmentIcon />,
        label: "Assignments",
        href: "/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <ResultIcon />,
        label: "Results",
        href: "/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AttendanceIcon />,
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <EventIcon />,
        label: "Events",
        href: "/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MessageIcon />,
        label: "Messages",
        href: "/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <AnnouncementIcon />,
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <ProfileIcon />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <SettingIcon />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LogoutIcon />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-1" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            item.visible.includes(role) ? (
              <Link
                href={item.href}
                key={item.label}
                className="flex item-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
              >
                {item.icon}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ) : null
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
