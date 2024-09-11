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
    marginBottom: 25,
  },
  formGroup: {
    width: "100%",
    marginTop: 50,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 40,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
};
