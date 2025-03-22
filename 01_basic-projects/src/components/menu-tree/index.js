/*
 * Dashboard menu structure in a tree diagram format:
 * 
 * 1. Dashboard ("/dashboard")
 *    ├── Overview ("/dashboard/overview")
 *    ├── Analytics ("/dashboard/analytics")
 *    └── Reports ("/dashboard/reports")
 *        ├── Sales ("/dashboard/reports/sales")
 *        └── Expenses ("/dashboard/reports/expenses")
 * 
 * 2. Users ("/users")
 *    ├── List ("/users/list")
 *    └── Roles ("/users/roles")
 *        ├── Admin ("/users/roles/admin")
 *        └── Editor ("/users/roles/editor")
 * 
 * 3. Settings ("/settings")
 *    ├── General ("/settings/general")
 *    └── Notifications ("/settings/notifications")
 */
export const menus = [
  {
    label: "Dashboard",
    to: "/dashboard",
    children: [
      {
        label: "Overview",
        to: "overview",
      },
      {
        label: "Analytics",
        to: "analytics",
      },
      {
        label: "Reports",
        to: "reports",
        children: [
          {
            label: "Sales",
            to: "sales",
          },
          {
            label: "Expenses",
            to: "expenses",
          },
        ],
      },
    ],
  },
  {
    label: "Users",
    to: "/users",
    children: [
      {
        label: "List",
        to: "list",
      },
      {
        label: "Roles",
        to: "roles",
        children: [
          {
            label: "Admin",
            to: "admin",
          },
          {
            label: "Editor",
            to: "editor",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "General",
        to: "general",
      },
      {
        label: "Notifications",
        to: "notifications",
      },
    ],
  },
];

