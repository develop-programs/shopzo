import React from "react";
import { Button } from "@/components/ui/button";

export default function Keys() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.43541 1.94179C9.19861 1.72471 8.83285 1.73266 8.6057 1.95981L1.98983 8.57588C1.75552 8.8102 1.75552 9.19009 1.98984 9.42441L2.91572 10.3503C2.91538 10.3502 2.9159 10.3504 2.91572 10.3503C2.91807 10.3512 2.92619 10.3537 2.93968 10.3537C2.96923 10.3537 3.01028 10.3427 3.04732 10.318C3.34884 10.1171 3.71136 9.99994 4.10004 9.99994C5.14938 9.99994 6.00004 10.8506 6.00004 11.8999C6.00004 12.2886 5.8829 12.6511 5.68193 12.9527C5.65724 12.9897 5.64632 13.0307 5.64629 13.0603C5.64628 13.0738 5.64848 13.0811 5.64937 13.0835C5.64929 13.0833 5.6495 13.0838 5.64937 13.0835L6.55388 13.9885C6.79323 14.2278 7.18307 14.2219 7.41506 13.9754L14.0142 6.96383C14.2434 6.72029 14.2293 6.33634 13.9827 6.11033L13.0965 5.2979C13.096 5.29773 13.0952 5.29745 13.0938 5.29714C13.0883 5.29582 13.0741 5.29399 13.0509 5.29813C13.0002 5.30717 12.9423 5.33833 12.9037 5.3807C12.5568 5.76078 12.0561 6.00013 11.5 6.00013C10.4507 6.00013 9.60004 5.14948 9.60004 4.10013C9.60004 3.60351 9.7911 3.1506 10.103 2.81236C10.1418 2.77031 10.1677 2.71017 10.1723 2.65911C10.1744 2.63573 10.1714 2.62185 10.1696 2.61645C10.1692 2.61518 10.1688 2.61437 10.1686 2.61393L9.43541 1.94179ZM8.04 1.39414C8.57002 0.864105 9.42347 0.845562 9.976 1.35208L10.7094 2.02434C10.9282 2.22496 10.9901 2.49757 10.9691 2.7308C10.9484 2.96044 10.8474 3.18527 10.6911 3.3547C10.5101 3.55102 10.4 3.81227 10.4 4.10013C10.4 4.70765 10.8925 5.20013 11.5 5.20013C11.8219 5.20013 12.1111 5.06238 12.3128 4.84139C12.4681 4.67121 12.6834 4.55107 12.9104 4.51057C13.1409 4.46944 13.418 4.50735 13.6369 4.70806L14.5233 5.52062C15.0986 6.04796 15.1316 6.94385 14.5967 7.51213L7.99762 14.5237C7.45631 15.0988 6.54668 15.1126 5.98819 14.5541L5.08374 13.6497C4.73659 13.3025 4.82019 12.8031 5.01625 12.509C5.13236 12.3348 5.20004 12.1259 5.20004 11.8999C5.20004 11.2924 4.70755 10.7999 4.10004 10.7999C3.87412 10.7999 3.66522 10.8676 3.49101 10.9837C3.19686 11.1798 2.69744 11.2634 2.3503 10.9162L1.42415 9.99009C0.877422 9.44336 0.877415 8.55694 1.42413 8.01021L8.04 1.39414Z"
              fill="#242424"
            />
          </svg>
          <span className="text-lg font-semibold">Offer keys</span>
        </div>
        <Button variant="outline" size="sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
          >
            <path
              d="M6 12H12M12 12H18M12 12V18M12 12V6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Create key
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
          "asfg-cojs-sqre-12mu-usoc",
        ].map((item: any, index: number) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
              >
                <path
                  d="M22.7336 12C23.8382 12 24.7336 11.1046 24.7336 10C24.7336 8.89543 23.8382 8 22.7336 8C21.6291 8 20.7336 8.89543 20.7336 10C20.7336 11.1046 21.6291 12 22.7336 12Z"
                  fill="#242424"
                />
                <path
                  d="M15.7336 24V23H17.7336C18.2859 23 18.7336 22.5523 18.7336 22V20H20.7336C25.1519 20 28.7336 16.4183 28.7336 12C28.7336 7.58172 25.1519 4 20.7336 4C16.3154 4 12.7336 7.58172 12.7336 12C12.7336 12.7842 12.8468 13.5434 13.058 14.2614L5.31943 22C4.94436 22.3751 4.73364 22.8838 4.73364 23.4142V26C4.73364 27.1046 5.62907 28 6.73364 28H10.7336C11.8382 28 12.7336 27.1046 12.7336 26V25H14.7336C15.2859 25 15.7336 24.5523 15.7336 24ZM14.7336 12C14.7336 8.68629 17.4199 6 20.7336 6C24.0474 6 26.7336 8.68629 26.7336 12C26.7336 15.3137 24.0474 18 20.7336 18H17.7336C17.1814 18 16.7336 18.4477 16.7336 19V21H14.7336C14.1814 21 13.7336 21.4477 13.7336 22V23H11.7336C11.1814 23 10.7336 23.4477 10.7336 24V26H6.73364L6.73364 23.4142L14.9116 15.2363C15.1917 14.9561 15.2801 14.5371 15.1369 14.1677C14.8768 13.4967 14.7336 12.7663 14.7336 12Z"
                  fill="#242424"
                />
              </svg>
              <span className="text-sm">{item}</span>
            </div>
            <Button variant="ghost" size="icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <path
                  d="M11.299 7.75C10.7216 6.75 9.27823 6.75 8.70088 7.75L8.24929 8.53218C8.10532 8.78152 8.20117 9.10063 8.45869 9.22939C8.69528 9.34768 8.98306 9.26125 9.11531 9.03218L9.5669 8.25C9.75935 7.91667 10.2405 7.91667 10.4329 8.25L10.8845 9.03218C11.0168 9.26125 11.3046 9.34768 11.5411 9.22939C11.7987 9.10063 11.8945 8.78152 11.7505 8.53218L11.299 7.75ZM12.165 11.25L12.0574 11.0637C11.9135 10.8144 12.0093 10.4953 12.2668 10.3665C12.5034 10.2482 12.7912 10.3347 12.9235 10.5637L13.031 10.75C13.6084 11.75 12.8867 13 11.732 13H10.9999C10.7238 13 10.4999 12.7761 10.4999 12.5C10.4999 12.2239 10.7238 12 10.9999 12H11.732C12.1169 12 12.3574 11.5833 12.165 11.25ZM8.99991 12C9.27606 12 9.49991 12.2239 9.49991 12.5C9.49991 12.7761 9.27606 13 8.99991 13H8.26786C7.11316 13 6.39147 11.75 6.96882 10.75L7.07636 10.5637C7.20861 10.3347 7.4964 10.2482 7.73298 10.3665C7.9905 10.4953 8.08635 10.8144 7.94238 11.0637L7.83485 11.25C7.6424 11.5833 7.88296 12 8.26786 12H8.99991ZM15.9142 2.58579C16.2893 2.96086 16.5 3.46957 16.5 4V4.56L15.17 16.23C15.1133 16.7196 14.8778 17.1711 14.5087 17.4978C14.1396 17.8244 13.6629 18.0033 13.17 18H6.85C6.35711 18.0033 5.88037 17.8244 5.51127 17.4978C5.14216 17.1711 4.90667 16.7196 4.85 16.23L3.5 4.56V4C3.5 3.46957 3.71071 2.96086 4.08579 2.58579C4.46086 2.21071 4.96957 2 5.5 2H14.5C15.0304 2 15.5391 2.21071 15.9142 2.58579ZM14.5 3H5.5C5.23478 3 4.98043 3.10536 4.79289 3.29289C4.60536 3.48043 4.5 3.73478 4.5 4H15.5C15.5 3.73478 15.3946 3.48043 15.2071 3.29289C15.0196 3.10536 14.7652 3 14.5 3ZM13.8309 16.747C14.0156 16.5827 14.1328 16.3557 14.16 16.11L15.44 5H4.56L5.84 16.11C5.86719 16.3557 5.98443 16.5827 6.16911 16.747C6.35378 16.9114 6.59279 17.0015 6.84 17H13.16C13.4072 17.0015 13.6462 16.9114 13.8309 16.747Z"
                  fill="#242424"
                />
              </svg>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
