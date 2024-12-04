import {
  BellRing,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  CalendarClock,
  Cctv,
  CircleAlert,
  Headset,
  House,
  Languages,
  LayoutGrid,
  Mail,
  MapPin,
  Megaphone,
  MessageCircleQuestion,
  Network,
  Paintbrush,
  Phone,
  Rss,
  ShieldQuestion,
  ShoppingCart,
  Users,
  Video,
} from "lucide-react";

const navigationLinks = [
  { title: "home", href: "/", icon: House },
  {
    title: "solutions",
    href: "/solutions",
    icon: Cctv,
    hasSubmenu: true,
  },
  { title: "aboutUs", href: "/about-us", icon: CircleAlert },
  { title: "blogs", href: "/blogs", icon: Building2 },
];

const consultingServiceFeatures = [
  {
    title: "cardFeatureAppointmentTitle",
    description: "cardFeatureAppointmentDescription",
    icon: CalendarCheck2,
  },
  {
    title: "cardFeatureNotificationTitle",
    description: "cardFeatureNotificationDescription",
    icon: BellRing,
  },
  {
    title: "cardFeatureMeetingTitle",
    description: "cardFeatureMeetingDescription",
    icon: Video,
  },
  {
    title: "cardFeatureSatisfactionTitle",
    description: "cardFeatureSatisfactionDescription",
    icon: MessageCircleQuestion,
  },
];

const agencyInfo = [
  {
    title: "companyPhoneNumber",
    details: "companyPhoneNumberInfo",
    icon: Phone,
    href: "https://wa.me/+966531222169",
  },
  {
    title: "companyEmail",
    details: "companyEmailInfo",
    icon: Mail,
    href: "mailto:info@abak.sa.com",
  },
  {
    title: "companyAddress",
    details: "companyAddressInfo",
    icon: MapPin,
    href: "https://www.google.com/maps/place/ABAK+Engineering+consulting/@24.6574337,46.7330799,17z/data=!4m14!1m7!3m6!1s0x3e2f05eb22af8149:0x6993633fe74c6d55!2sABAK+Engineering+consulting!8m2!3d24.6574337!4d46.7356548!16s%2Fg%2F11t_sfbjb_!3m5!1s0x3e2f05eb22af8149:0x6993633fe74c6d55!8m2!3d24.6574337!4d46.7356548!16s%2Fg%2F11t_sfbjb_?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D",
  },
];

const adminNavigationLinks = [
  { title: "dashboardMain", href: "/admin-dashboard", icon: LayoutGrid },
  {
    title: "categories",
    href: "/admin-dashboard/categories",
    icon: Network,
  },
  {
    title: "orders",
    href: "/admin-dashboard/orders",
    icon: ShoppingCart,
  },
  { title: "support", href: "/admin-dashboard/contact", icon: Headset },
  { title: "blogs", href: "/admin-dashboard/blogs", icon: Rss },
];

const adminSettingsNavigationLinks = [
  {
    title: "designSettings",
    href: "/admin-dashboard/settings/design",
    icon: Paintbrush,
  },
  {
    title: "informationSettings",
    href: "/admin-dashboard/settings/information",
    icon: ShieldQuestion,
  },
  {
    title: "usersSettings",
    href: "/admin-dashboard/settings/users",
    icon: Users,
  },
  {
    title: "marketingSettings",
    href: "/admin-dashboard/settings/marketing",
    icon: Megaphone,
  },
  {
    title: "languageSettings",
    href: "/admin-dashboard/settings/language",
    icon: Languages,
  },
];

export {
  navigationLinks,
  consultingServiceFeatures,
  agencyInfo,
  adminNavigationLinks,
  adminSettingsNavigationLinks,
};
