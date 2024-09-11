import {COLORS, FONT_SIZE} from "../../constantes/theme";

export const styled = {
  container: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  formHorizontal: {
    flexDirection: "row",
  },
  formGroup: {
    width: "100%",
    marginTop: 25,
    marginBottom: 120,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  form70: {
    width: "70%",
    marginBottom: 15,
  },
  form30: {
    width: "30%",
    marginBottom: 15,
    paddingLeft: 10,
  },
};
