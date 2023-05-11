import Vue from "vue";
import {
  Button,
  Container,
  Header,
  Main,
  Aside,
  Row,
  Col,
  Dialog,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Radio,
  RadioGroup,
  DatePicker,
  Message,
  MessageBox,
  Link,
  Table,
  TableColumn,
  Pagination,
  Menu,
  MenuItem,
  Submenu,
} from "element-ui";

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(DatePicker);
Vue.use(Link);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
