import React from "react";

interface EyeSlashProps {
  fill?: true;
  color?: string;
}

const EyeSlash: React.FC<EyeSlashProps> = ({
  fill = false,
  color = "#171719",
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {fill ? (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.129 18.1295L18.7633 20.7638L20.0361 19.491L3.77263 3.22754L2.49983 4.50033L5.28576 7.28626C3.75892 8.40074 2.51956 9.88553 1.6998 11.6085C1.58184 11.8564 1.58184 12.1442 1.6998 12.3921C3.53069 16.2403 7.45462 18.9003 11.9998 18.9003C13.4561 18.9003 14.8487 18.6272 16.129 18.1295ZM13.5706 15.5711L12.0976 14.0981C12.0652 14.0996 12.0326 14.1004 11.9998 14.1004C10.84 14.1004 9.89983 13.1602 9.89983 12.0004C9.89983 11.9676 9.90059 11.935 9.90207 11.9026L8.42908 10.4296C8.21737 10.9101 8.09983 11.4415 8.09983 12.0004C8.09983 14.1543 9.84592 15.9004 11.9998 15.9004C12.5587 15.9004 13.0901 15.7828 13.5706 15.5711ZM15.8224 12.7773L19.301 16.2558C20.5594 15.2053 21.5879 13.8885 22.2999 12.3921C22.4178 12.1442 22.4178 11.8564 22.2999 11.6085C20.469 7.76032 16.545 5.10034 11.9998 5.10034C10.8328 5.10034 9.70682 5.27569 8.64666 5.60148L11.2229 8.17775C11.474 8.127 11.7338 8.10037 11.9998 8.10037C14.1537 8.10037 15.8998 9.84646 15.8998 12.0004C15.8998 12.2664 15.8732 12.5262 15.8224 12.7773Z"
          fill={color}
        />
      ) : (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.7115 16.7115L13.5706 15.5706C13.09 15.7823 12.5587 15.8998 11.9998 15.8998C9.84592 15.8998 8.09983 14.1537 8.09983 11.9998C8.09983 11.441 8.21737 10.9096 8.42906 10.4291L6.57704 8.57705C5.30142 9.45183 4.24772 10.6267 3.51771 11.9998C5.13072 15.0339 8.32402 17.0998 11.9998 17.0998C12.9415 17.0998 13.8516 16.9642 14.7115 16.7115ZM16.5179 15.9723L8.21873 7.67316C9.37907 7.17545 10.6573 6.89985 11.9998 6.89985C15.6756 6.89985 18.8689 8.96577 20.482 11.9998C19.5857 13.6857 18.2016 15.0726 16.5179 15.9723ZM17.8386 17.2931C19.7683 16.1401 21.3286 14.4331 22.2999 12.3916C22.4178 12.1437 22.4178 11.856 22.2999 11.608C20.469 7.75984 16.545 5.09985 11.9998 5.09985C10.1526 5.09985 8.40794 5.53922 6.86472 6.31915L3.77263 3.22705L2.49983 4.49984L5.28576 7.28577C3.75892 8.40025 2.51956 9.88504 1.6998 11.608C1.58184 11.856 1.58184 12.1437 1.6998 12.3916C3.53069 16.2398 7.45462 18.8998 11.9998 18.8998C13.4561 18.8998 14.8487 18.6267 16.129 18.129L18.7633 20.7633L20.0361 19.4905L17.8386 17.2931ZM9.90207 11.9021L12.0976 14.0976C12.0652 14.0991 12.0326 14.0998 11.9998 14.0998C10.84 14.0998 9.89983 13.1596 9.89983 11.9998C9.89983 11.9671 9.90058 11.9345 9.90207 11.9021ZM15.8224 12.7767C15.8732 12.5257 15.8998 12.2659 15.8998 11.9998C15.8998 9.84591 14.1537 8.09982 11.9998 8.09982C11.7338 8.09982 11.474 8.12646 11.2229 8.17721L15.8224 12.7767Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default EyeSlash;
