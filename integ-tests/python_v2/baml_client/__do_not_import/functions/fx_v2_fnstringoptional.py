# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from baml_core.stream import AsyncStream
from baml_lib._impl.functions import BaseBAMLFunction
from typing import AsyncIterator, Callable, Optional, Protocol, runtime_checkable


IV2_FnStringOptionalOutput = str

@runtime_checkable
class IV2_FnStringOptional(Protocol):
    """
    This is the interface for a function.

    Args:
        input: Optional[str]

    Returns:
        str
    """

    async def __call__(self, *, input: Optional[str] = None) -> str:
        ...

   

@runtime_checkable
class IV2_FnStringOptionalStream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        input: Optional[str]

    Returns:
        AsyncStream[str, str]
    """

    def __call__(self, *, input: Optional[str] = None
) -> AsyncStream[str, str]:
        ...
class IBAMLV2_FnStringOptional(BaseBAMLFunction[str, str]):
    def __init__(self) -> None:
        super().__init__(
            "V2_FnStringOptional",
            IV2_FnStringOptional,
            ["default_config"],
        )

    async def __call__(self, *args, **kwargs) -> str:
        return await self.get_impl("default_config").run(*args, **kwargs)
    
    def stream(self, *args, **kwargs) -> AsyncStream[str, str]:
        res = self.get_impl("default_config").stream(*args, **kwargs)
        return res

BAMLV2_FnStringOptional = IBAMLV2_FnStringOptional()

__all__ = [ "BAMLV2_FnStringOptional" ]