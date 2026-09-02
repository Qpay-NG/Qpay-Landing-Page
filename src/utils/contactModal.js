export const CONTACT_MODAL_EVENT = "qpay:open-contact-modal";

export function openContactModal(variant = "contact") {
  const requestedVariant = typeof variant === "string" ? variant : undefined;

  window.dispatchEvent(
    new CustomEvent(
      CONTACT_MODAL_EVENT,
      requestedVariant && requestedVariant !== "contact"
        ? { detail: { variant: requestedVariant } }
        : undefined
    )
  );
}
