import React from "react";

const TreePreview = ({ data, css }) => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundColor: css.bg,
        paddingTop: css.pt,
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[500px] w-full">
        <img
          alt="pfp"
          src={data?.image}
          style={{
            display: "block",
            width: css.profile.width,
            height: css.profile.height,
            borderRadius: `${css.profile.borderRadius}%`,
            border: `${css.profile.border} solid ${css.profile.borderColor}`,
          }}
          className="mx-auto object-cover"
        />
        <div className="flex flex-col text-white my-3">
          <div
            className="mx-auto my-3 font-semibold"
            style={{
              fontSize: css.title.size,
              color: css.title.color,
            }}
          >
            {data?.name}
          </div>
          <div
            className="px-4 max-w-[32rem] mx-auto text-center"
            style={{
              fontSize: css.bio.size,
              color: css.bio.color,
            }}
          >
            {data?.description}
          </div>
        </div>

        <div className="flex flex-col my-3 ">
          {data?.original?.map((p, i) => {
            return (
              <div>
                <a
                  href="/"
                  className="w-[80%] p-[20px] mx-auto my-2 text-center"
                  style={{
                    backgroundColor: css.link.bg,
                    fontSize: css.link.size,
                    color: css.link.color,
                    border: `${css.link.border} solid ${css.link.borderColor}`,
                    borderRadius: `${css.link.borderRadius}px`,
                  }}
                  id={i}
                >
                  {p.title}
                  <br />
                  <p>{p.description}</p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TreePreview;
