# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from baml_core.stream import AsyncStream
from baml_lib._impl.functions import BaseBAMLFunction
from typing import AsyncIterator, Callable, List, Protocol, runtime_checkable


IV2_TestFnNamedArgsSingleStringArrayOutput = str

@runtime_checkable
class IV2_TestFnNamedArgsSingleStringArray(Protocol):
    """
    This is the interface for a function.

    Args:
        myStringArray: List[str]

    Returns:
        str
    """

    async def __call__(self, *, myStringArray: List[str]) -> str:
        ...

   

@runtime_checkable
class IV2_TestFnNamedArgsSingleStringArrayStream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        myStringArray: List[str]

    Returns:
        AsyncStream[str, str]
    """

    def __call__(self, *, myStringArray: List[str]
) -> AsyncStream[str, str]:
        ...
class IBAMLV2_TestFnNamedArgsSingleStringArray(BaseBAMLFunction[str, str]):
    def __init__(self) -> None:
        super().__init__(
            "V2_TestFnNamedArgsSingleStringArray",
            IV2_TestFnNamedArgsSingleStringArray,
            ["default_config"],
        )

    async def __call__(self, *args, **kwargs) -> str:
        return await self.get_impl("default_config").run(*args, **kwargs)
    
    def stream(self, *args, **kwargs) -> AsyncStream[str, str]:
        res = self.get_impl("default_config").stream(*args, **kwargs)
        return res

BAMLV2_TestFnNamedArgsSingleStringArray = IBAMLV2_TestFnNamedArgsSingleStringArray()

__all__ = [ "BAMLV2_TestFnNamedArgsSingleStringArray" ]