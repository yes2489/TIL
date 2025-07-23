import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
// clsx: 클래스 이름을 쉽게 전환할 수 있는 라이브러리
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        // InvoiceStatus css의 className을 조건부로 적용
        // pending일 경우 gray / paid일 경우 green
        "inline-flex items-center rounded-full px-2 py-1 text-xs",
        {
          "bg-gray-100 text-gray-500": status === "pending",
          "bg-green-500 text-white": status === "paid",
        }
      )}
    >
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
