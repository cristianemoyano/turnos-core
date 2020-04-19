from invoke_release.tasks import *  # noqa: F403


configure_release_parameters(  # noqa: F405
    module_name='server',
    display_name='Turnos Web',
    use_pull_request=True,
)
