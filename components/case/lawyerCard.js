import { Button, Typography } from "@material-tailwind/react";
import React from "react";

function LawyerCard({ data }) {
  return (
    <div>
      <div
        className="p-4 mt-5 mb-5 hover:shadow-[grey] shadow-lg cursor-pointer flex justify-between flex-wrap items-center"
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "5px",
        }}
      >
        <div>
          <Typography variant="h4">{data.lawyer.name}</Typography>
          {data.lawyer.expertise && (
            <div className="mt-1">
              {data.lawyer.expertise.map((tag, index) => (
                <div
                  key={`TAG_${index}`}
                  className="badge badge-primary p-3 badge-outline mt-1 mr-1"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <Typography variant="h6">Location:</Typography>
          <Typography>{data.lawyer.location}</Typography>
        </div>
      </div>
    </div>
  );
}

export default LawyerCard;
