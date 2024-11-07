import React from "react";
import * as Icons from "../icons";
export enum IconName {
  Android = "Android",
  Apps = "Apps",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowUp = "ArrowUp",
  Bell = "Bell",
  BellPlus = "BellPlus",
  Book = "Book",
  BookMark = "BookMark",
  Bubble = "Bubble",
  BubblePlus = "BubblePlus",
  BusinessBag = "BusinessBag",
  Calendar = "Calendar",
  Camera = "Camera",
  Career = "Career",
  CaretDown = "CaretDown",
  CaretUp = "CaretUp",
  Change = "Change",
  Check = "Check",
  Chevron = "Chevron",
  ChevronDouble = "ChevronDouble",
  ChevronTight = "ChevronTight",
  Circle = "Circle",
  CircleBlock = "CircleBlock",
  CircleCheck = "CircleCheck",
  CircleExclamation = "CircleExclamation",
  CircleInfo = "CircleInfo",
  CirclePlus = "CirclePlus",
  CirclePoint = "CirclePoint",
  CircleQuestion = "CircleQuestion",
  Close = "Close",
  Coins = "Coins",
  Company = "Company",
  CompanyCheck = "CompanyCheck",
  CompanyPlus = "CompanyPlus",
  Compass = "Compass",
  Copy = "Copy",
  Crown = "Crown",
  Desktop = "Desktop",
  Document = "Document",
  DocumentPerson = "DocumentPerson",
  DocumentText = "DocumentText",
  Dot = "Dot",
  Download = "Download",
  Exclamation = "Exclamation",
  ExternalLink = "ExternalLink",
  Eye = "Eye",
  EyeSlash = "EyeSlash",
  FaceSmile = "FaceSmile",
  Filter = "Filter",
  Folder = "Folder",
  FolderJob = "FolderJob",
  FolderStar = "FolderStar",
  Full = "Full",
  Globe = "Globe",
  Graduation = "Graduation",
  Handle = "Handle",
  Heart = "Heart",
  History = "History",
  Home = "Home",
  IconImage = "IconImage",
  IconLink = "IconLink",
  IconList = "IconList",
  Keyboard = "Keyboard",
  Like = "Like",
  LineHorizontal = "LineHorizontal",
  ListCategory = "ListCategory",
  Location = "Location",
  Lock = "Lock",
  LockOpen = "LockOpen",
  LogoApple = "LogoApple",
  LogoFacebook = "LogoFacebook",
  LogoGoogle = "LogoGoogle",
  LogoGooglePlay = "LogoGooglePlay",
  LogoInstagram = "LogoInstagram",
  LogoKakao = "LogoKakao",
  LogoLinkedIn = "LogoLinkedIn",
  LogoNaverBlog = "LogoNaverBlog",
  LogoYouTube = "LogoYouTube",
  MagicWand = "MagicWand",
  Mail = "Mail",
  Menu = "Menu",
  Message = "Message",
  Minus = "Minus",
  Mobile = "Mobile",
  MoreHorizontal = "MoreHorizontal",
  MoreVertical = "MoreVertical",
  MyPage = "MyPage",
  NavigationMenu = "NavigationMenu",
  Pause = "Pause",
  Pencil = "Pencil",
  Person = "Person",
  PersonPlus = "PersonPlus",
  Persons = "Persons",
  Pin = "Pin",
  Play = "Play",
  Plus = "Plus",
  Question = "Question",
  Recruit = "Recruit",
  Refresh = "Refresh",
  Search = "Search",
  Send = "Send",
  Setting = "Setting",
  Share = "Share",
  ShareiOS = "ShareiOS",
  Social = "Social",
  Square = "Square",
  SquareHan = "SquareHan",
  SquareHangul = "SquareHangul",
  SquareKana = "SquareKana",
  SquareLatin = "SquareLatin",
  SquareMore = "SquareMore",
  SquarePlus = "SquarePlus",
  Star = "Star",
  Template = "Template",
  Thumbnail = "Thumbnail",
  Thunder = "Thunder",
  Trash = "Trash",
  Triangle = "Triangle",
  TriangleExclamation = "TriangleExclamation",
  Trophy = "Trophy",
  Tune = "Tune",
  Upload = "Upload",
  VerifiedCheck = "VerifiedCheck",
  VerifiedStar = "VerifiedStar",
  Write = "Write",
}

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 20, color = "#171719" }) => {
  const IconComponent = Icons[name as IconName];
  return <IconComponent size={size} color={color} />;
};
export default Icon;