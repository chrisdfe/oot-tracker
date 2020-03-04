import React, { ReactNode } from "react";

import { ThemeProvider } from "styled-components";

const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

interface Props {
  children: ReactNode;
}

type RegionTheme = {
  background: {
    color: {
      primary: string;
      secondary: string;
    };
  };
  text: {
    color: {
      primary: string;
    };
  };
  border: {
    color: {
      primary: string;
      secondary: string;
    };
  };
};

const rawColors = {
  white: "#fff",
  // caper: "#d1e9b9",
  // caper: "#dce8c9",
  caper: "#e1e5da",
  // killarney: "#366a45"
  killarney: "#2f5e42",
  kellyGreen: "#22d07a"
};

const rawFonts = {
  merriweather: "Merriweather, sans-serif",
  openSans: "'Open Sans', sans-serif"
};

const defaultTheme: RegionTheme = {
  background: {
    color: {
      // primary: rawColors.caper,
      // primary: "#f0f3f7",
      primary: rawColors.white,
      // primary: "#",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      // primary: rawColors.killarney
      // primary: "#353a3f"
      primary: "#2A3854"
    }
  },
  border: {
    color: {
      // primary: rawColors.killarney,
      primary: "#2A3854",
      secondary: hexToRGB("#2A3854", 0.2)
      // secondary: "#c0c3c6"
    }
  }
};

const defaultInverseTheme: RegionTheme = {
  background: {
    color: {
      // primary: rawColors.caper,
      // primary: "#f0f3f7",
      primary: "#2A3854",
      // primary: "#",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      // primary: rawColors.killarney
      // primary: "#353a3f"
      // primary: "#2A3854"
      primary: rawColors.white
    }
  },
  border: {
    color: {
      // primary: rawColors.killarney,
      primary: rawColors.white,
      secondary: hexToRGB(rawColors.white, 0.2)
      // secondary: "#c0c3c6"
    }
  }
};

const zoraTheme: RegionTheme = {
  background: {
    color: {
      // primary: "white",
      primary: "#d7e5ed",
      secondary: "#08466e"
    }
  },
  text: {
    color: {
      primary: "#08466e"
      // secondary: "#d7e5ed",
    }
  },
  border: {
    color: {
      primary: "#08466e",
      secondary: rawColors.white
    }
  }
};

const kokiriTheme: RegionTheme = {
  background: {
    color: {
      primary: rawColors.caper,
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      primary: rawColors.killarney
    }
  },
  border: {
    color: {
      primary: rawColors.killarney,
      secondary: rawColors.white
    }
  }
};

const goronTheme: RegionTheme = {
  background: {
    color: {
      primary: "#e5cccc",
      secondary: "#c13540"
    }
  },
  text: {
    color: {
      primary: "#c13540"
      // secondary: "#e5cccc"
    }
  },
  border: {
    color: {
      primary: "#c13540",
      secondary: rawColors.white
    }
  }
};

const shadowTheme: RegionTheme = {
  background: {
    color: {
      // primary: "#e6d6ea",
      primary: "#dddce5",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      // primary: "#373551"
      // primary: "#684657"
      primary: "#635566"
      // secondary: "#e5cccc"
    }
  },
  border: {
    color: {
      // primary: "#373551",
      // primary: "#684657",
      primary: "#635566",
      secondary: rawColors.white
    }
  }
};

const gerudoTheme: RegionTheme = {
  background: {
    color: {
      // primary: "#ffccba",
      // primary: "#f2c1ba",
      // primary: "#efd2ce",
      // primary: "#ffcca5",
      // primary: "#ffd7ba",
      primary: "#FBDEC6",
      // primary: "#ffdabf",
      // primary: "#efd2ce",
      // primary: "#f2e6d0",
      // primary: "#e2d1c5",
      secondary: rawColors.white
    }
  },
  text: {
    color: {
      // primary: "#f95a5a"
      // primary: "#f46464",
      // primary: "#d35656"
      primary: "#E5555E"
      // secondary: "#e5cccc"
    }
  },
  border: {
    color: {
      // primary: "#f95a5a",
      // primary: "#f46464",
      // primary: "#d35656",
      primary: "#E5555E",
      secondary: rawColors.white
    }
  }
};

const theme = {
  rawColors,
  rawFonts,

  fonts: {
    heading: rawFonts.merriweather,
    body: rawFonts.openSans
  },

  ...defaultTheme,

  default: defaultTheme,
  defaultInverse: defaultInverseTheme,
  zora: zoraTheme,
  kokiri: kokiriTheme,
  goron: goronTheme,
  shadow: shadowTheme,
  gerudo: gerudoTheme

  // interactive: {
  //   color: {
  //     primary: rawColors.kellyGreen
  //   }
  // }
};

const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
