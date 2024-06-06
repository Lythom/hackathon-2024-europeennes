import copySvg from "@/components/icons/copy.svg";
import shareSvg from "@/components/icons/share.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { useRef, useState } from "react";

export function ShareButton() {
  const inputShare = useRef<HTMLInputElement>(null);
  const inputShareResult = useRef<HTMLInputElement>(null);

  const [inputChecked, setInputChecked] = useState<boolean>();
  const [inputResultChecked, setInputResultChecked] = useState<boolean>();

  function share() {
    inputShare.current?.select();
    setInputChecked(true);
    return navigator.clipboard.writeText(
      "https://mon-europe-2024.lonestone.io/"
    );
  }

  function shareResult() {
    inputShareResult.current?.select();
    setInputResultChecked(true);
    navigator.clipboard.writeText(document.documentURI);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        style={{ top: -54, right: 0, zIndex: 60 }}
        className="absolute cta-button inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-12 py-4"
      >
        Partager <img src={shareSvg} className="pl-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        style={{ width: 320 }}
        className="bg-white text-gray-800 p-2"
      >
        <DropdownMenuLabel>
          <div className="pb-2">Partager ce questionnaire</div>
          <div className="flex">
            <input
              ref={inputShare}
              type="text"
              readOnly
              value="https://mon-europe-2024.lonestone.io/"
              className="bg-white text-gray-800 border-2 border-gray-200 p-1 rounded-sm grow"
            />
            <button
              className="inline-flex items-center cta-button rounded-sm ml-2"
              onClick={share}
            >
              <img
                src={copySvg}
                style={{ fill: "white" }}
                className="p-2 w-8"
                alt="copy"
              />
              {inputChecked && <span className="pr-2">✔</span>}
            </button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuLabel>
          <div className="pb-2">Partager mes résultats</div>
          <div className="flex">
            <input
              ref={inputShareResult}
              type="text"
              readOnly
              value={document.documentURI}
              className="bg-white text-gray-800 border-2 border-gray-200 p-1 rounded-sm grow"
            />
            <button
              className="inline-flex items-center cta-button rounded-sm ml-2"
              onClick={shareResult}
            >
              <img
                src={copySvg}
                style={{ fill: "white" }}
                className="p-2 w-8"
                alt="copy"
              />
              {inputResultChecked && <span className="pr-2">✔</span>}
            </button>
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
