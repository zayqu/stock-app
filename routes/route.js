const express = require('express');
const route = express.Router();


route.get('/advanced-animation', (req, res, next) => {
  res.render('advanced-animation', {title: 'Advanced Animation', layout: 'partials/layout-vertical'});
})

route.get('/advanced-clipboard', (req, res, next) => {
  res.render('advanced-clipboard', {title: 'Advanced Clipboard'});
})

route.get('/advanced-dragula', (req, res, next) => {
  res.render('advanced-dragula', {title: 'Advanced Dragula'});
})

route.get('/advanced-files', (req, res, next) => {
  res.render('advanced-files', {title: 'Advanced Files'});
})

route.get('/advanced-highlight', (req, res, next) => {
  res.render('advanced-highlight', {title: 'Advanced Highlight'});
})

route.get('/advanced-rangeslider', (req, res, next) => {
  res.render('advanced-rangeslider', {title: 'Advanced Rangeslider'});
})

route.get('/advanced-ratings', (req, res, next) => {
  res.render('advanced-ratings', {title: 'Advanced Ratings'});
})

route.get('/advanced-ribbons', (req, res, next) => {
  res.render('advanced-ribbons', {title: 'Advanced Ribbons'});
})

route.get('/advanced-sweetalerts', (req, res, next) => {
  res.render('advanced-sweetalerts', {title: 'Advanced Sweetalerts'});
})

route.get('/advanced-toasts', (req, res, next) => {
  res.render('advanced-toasts', {title: 'Advanced Toasts'});
})

route.get('/analytics-customers', (req, res, next) => {
  res.render('analytics-customers', {title: 'Analytics Customers'});
})

route.get('/analytics-reports', (req, res, next) => {
  res.render('analytics-reports', {title: 'Analytics Reports'});
})

route.get('/apps-calendar', (req, res, next) => {
  res.render('apps-calendar', {title: 'Apps Calendar'});
})

route.get('/apps-chat', (req, res, next) => {
  res.render('apps-chat', {title: 'Apps Chat'});
})

route.get('/apps-contact-list', (req, res, next) => {
  res.render('apps-contact-list', {title: 'Apps Contact List'});
})

route.get('/apps-invoice', (req, res, next) => {
  res.render('apps-invoice', {title: 'Apps Invoice'});
})

route.get('/auth-404', (req, res, next) => {
  res.render('auth-404', {title: 'Auth 404', layout: 'partials/layout-auth'});
})

route.get('/auth-500', (req, res, next) => {
  res.render('auth-500', {title: 'Auth 500', layout: 'partials/layout-auth'});
})

route.get('/auth-lock-screen', (req, res, next) => {
  res.render('auth-lock-screen', {title: 'Auth Lock Screen', layout: 'partials/layout-auth'});
})

route.get('/auth-login', (req, res, next) => {
  res.render('auth-login', {title: 'Auth Login', layout: 'partials/layout-auth'});
})

route.get('/auth-maintenance', (req, res, next) => {
  res.render('auth-maintenance', {title: 'Auth Maintenance', layout: 'partials/layout-auth'});
})

route.get('/auth-recover-pw', (req, res, next) => {
  res.render('auth-recover-pw', {title: 'Auth Recover Pw', layout: 'partials/layout-auth'});
})

route.get('/auth-register', (req, res, next) => {
  res.render('auth-register', {title: 'Auth Register', layout: 'partials/layout-auth'});
})

route.get('/charts-apex', (req, res, next) => {
  res.render('charts-apex', {title: 'Charts Apex'});
})

route.get('/charts-chartjs', (req, res, next) => {
  res.render('charts-chartjs', {title: 'Charts Chartjs'});
})

route.get('/charts-echarts', (req, res, next) => {
  res.render('charts-echarts', {title: 'Charts Echarts'});
})

route.get('/charts-justgage', (req, res, next) => {
  res.render('charts-justgage', {title: 'Charts Justgage'});
})

route.get('/charts-toast-ui', (req, res, next) => {
  res.render('charts-toast-ui', {title: 'Charts Toast Ui'});
})

route.get('/ecommerce-customer-details', (req, res, next) => {
  res.render('ecommerce-customer-details', {title: 'Ecommerce Customer Details'});
})

route.get('/ecommerce-customers', (req, res, next) => {
  res.render('ecommerce-customers', {title: 'Ecommerce Customers'});
})

route.get('/ecommerce-index', (req, res, next) => {
  res.render('ecommerce-index', {title: 'Ecommerce Index'});
})

route.get('/ecommerce-order-details', (req, res, next) => {
  res.render('ecommerce-order-details', {title: 'Ecommerce Order Details'});
})

route.get('/ecommerce-orders', (req, res, next) => {
  res.render('ecommerce-orders', {title: 'Ecommerce Orders'});
})

route.get('/ecommerce-products', (req, res, next) => {
  res.render('ecommerce-products', {title: 'Ecommerce Products'});
})

route.get('/ecommerce-refunds', (req, res, next) => {
  res.render('ecommerce-refunds', {title: 'Ecommerce Refunds'});
})

route.get('/email-templates-alert', (req, res, next) => {
  res.render('email-templates-alert', {title: 'Email Templates Alert'});
})

route.get('/email-templates-basic', (req, res, next) => {
  res.render('email-templates-basic', {title: 'Email Templates Basic'});
})

route.get('/email-templates-billing', (req, res, next) => {
  res.render('email-templates-billing', {title: 'Email Templates Billing'});
})

route.get('/forms-advanced', (req, res, next) => {
  res.render('forms-advanced', {title: 'Forms Advanced'});
})

route.get('/forms-editors', (req, res, next) => {
  res.render('forms-editors', {title: 'Forms Editors'});
})

route.get('/forms-elements', (req, res, next) => {
  res.render('forms-elements', {title: 'Forms Elements'});
})

route.get('/forms-img-crop', (req, res, next) => {
  res.render('forms-img-crop', {title: 'Forms Img Crop'});
})

route.get('/forms-uploads', (req, res, next) => {
  res.render('forms-uploads', {title: 'Forms Uploads'});
})

route.get('/forms-validation', (req, res, next) => {
  res.render('forms-validation', {title: 'Forms Validation'});
})

route.get('/forms-wizard', (req, res, next) => {
  res.render('forms-wizard', {title: 'Forms Wizard'});
})

route.get('/icons-fontawesome', (req, res, next) => {
  res.render('icons-fontawesome', {title: 'Icons Fontawesome'});
})

route.get('/icons-icofont', (req, res, next) => {
  res.render('icons-icofont', {title: 'Icons Icofont'});
})

route.get('/icons-iconoir', (req, res, next) => {
  res.render('icons-iconoir', {title: 'Icons Iconoir'});
})

route.get('/icons-lineawesome', (req, res, next) => {
  res.render('icons-lineawesome', {title: 'Icons Lineawesome'});
})

route.get('/', (req, res, next) => {
  res.render('index', {title: 'Index'});
})

route.get('/index', (req, res, next) => {
  res.render('index', {title: 'Index'});
})

route.get('/maps-google', (req, res, next) => {
  res.render('maps-google', {title: 'Maps Google'});
})

route.get('/maps-leaflet', (req, res, next) => {
  res.render('maps-leaflet', {title: 'Maps Leaflet'});
})

route.get('/maps-vector', (req, res, next) => {
  res.render('maps-vector', {title: 'Maps Vector'});
})

route.get('/pages-blogs', (req, res, next) => {
  res.render('pages-blogs', {title: 'Pages Blogs'});
})

route.get('/pages-faq', (req, res, next) => {
  res.render('pages-faq', {title: 'Pages Faq'});
})

route.get('/pages-gallery', (req, res, next) => {
  res.render('pages-gallery', {title: 'Pages Gallery'});
})

route.get('/pages-notifications', (req, res, next) => {
  res.render('pages-notifications', {title: 'Pages Notifications'});
})

route.get('/pages-pricing', (req, res, next) => {
  res.render('pages-pricing', {title: 'Pages Pricing'});
})

route.get('/pages-profile', (req, res, next) => {
  res.render('pages-profile', {title: 'Pages Profile'});
})

route.get('/pages-starter', (req, res, next) => {
  res.render('pages-starter', {title: 'Pages Starter'});
})

route.get('/pages-timeline', (req, res, next) => {
  res.render('pages-timeline', {title: 'Pages Timeline'});
})

route.get('/pages-treeview', (req, res, next) => {
  res.render('pages-treeview', {title: 'Pages Treeview'});
})

route.get('/projects-clients', (req, res, next) => {
  res.render('projects-clients', {title: 'Projects Clients'});
})

route.get('/projects-create', (req, res, next) => {
  res.render('projects-create', {title: 'Projects Create'});
})

route.get('/projects-kanban-board', (req, res, next) => {
  res.render('projects-kanban-board', {title: 'Projects Kanban Board'});
})

route.get('/projects-project', (req, res, next) => {
  res.render('projects-project', {title: 'Projects Project'});
})

route.get('/projects-task', (req, res, next) => {
  res.render('projects-task', {title: 'Projects Task'});
})

route.get('/projects-team', (req, res, next) => {
  res.render('projects-team', {title: 'Projects Team'});
})

route.get('/projects-users', (req, res, next) => {
  res.render('projects-users', {title: 'Projects Users'});
})

route.get('/tables-basic', (req, res, next) => {
  res.render('tables-basic', {title: 'Tables Basic'});
})

route.get('/tables-datatable', (req, res, next) => {
  res.render('tables-datatable', {title: 'Tables Datatable'});
})

route.get('/tables-editable', (req, res, next) => {
  res.render('tables-editable', {title: 'Tables Editable'});
})

route.get('/ui-alerts', (req, res, next) => {
  res.render('ui-alerts', {title: 'Ui Alerts'});
})

route.get('/ui-avatar', (req, res, next) => {
  res.render('ui-avatar', {title: 'Ui Avatar'});
})

route.get('/ui-badges', (req, res, next) => {
  res.render('ui-badges', {title: 'Ui Badges'});
})

route.get('/ui-buttons', (req, res, next) => {
  res.render('ui-buttons', {title: 'Ui Buttons'});
})

route.get('/ui-cards', (req, res, next) => {
  res.render('ui-cards', {title: 'Ui Cards'});
})

route.get('/ui-carousels', (req, res, next) => {
  res.render('ui-carousels', {title: 'Ui Carousels'});
})

route.get('/ui-dropdowns', (req, res, next) => {
  res.render('ui-dropdowns', {title: 'Ui Dropdowns'});
})

route.get('/ui-grids', (req, res, next) => {
  res.render('ui-grids', {title: 'Ui Grids'});
})

route.get('/ui-images', (req, res, next) => {
  res.render('ui-images', {title: 'Ui Images'});
})

route.get('/ui-list', (req, res, next) => {
  res.render('ui-list', {title: 'Ui List'});
})

route.get('/ui-modals', (req, res, next) => {
  res.render('ui-modals', {title: 'Ui Modals'});
})

route.get('/ui-navbar', (req, res, next) => {
  res.render('ui-navbar', {title: 'Ui Navbar'});
})

route.get('/ui-navs', (req, res, next) => {
  res.render('ui-navs', {title: 'Ui Navs'});
})

route.get('/ui-paginations', (req, res, next) => {
  res.render('ui-paginations', {title: 'Ui Paginations'});
})

route.get('/ui-popover-tooltips', (req, res, next) => {
  res.render('ui-popover-tooltips', {title: 'Ui Popover Tooltips'});
})

route.get('/ui-progress', (req, res, next) => {
  res.render('ui-progress', {title: 'Ui Progress'});
})

route.get('/ui-spinners', (req, res, next) => {
  res.render('ui-spinners', {title: 'Ui Spinners'});
})

route.get('/ui-tabs-accordions', (req, res, next) => {
  res.render('ui-tabs-accordions', {title: 'Ui Tabs Accordions'});
})

route.get('/ui-typography', (req, res, next) => {
  res.render('ui-typography', {title: 'Ui Typography'});
})

route.get('/ui-videos', (req, res, next) => {
  res.render('ui-videos', {title: 'Ui Videos'});
})

module.exports  = route;