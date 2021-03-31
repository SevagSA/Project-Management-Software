from django.shortcuts import reverse, redirect


def redirect_to_nxt(request, redirect_path):
    """
    Redirect to GET["next"] if it exists.
    Navigate to redirect_path if none exists
    """
    nxt = request.GET.get("next", None)
    if nxt is not None:
        return redirect(nxt)
    return redirect(reverse(redirect_path))