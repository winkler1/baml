# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..types.classes.cls_optionalclassv2 import OptionalClassv2
from ..types.partial.classes.cls_optionalclassv2 import PartialOptionalClassv2
from baml_core.stream import AsyncStream
from typing import Callable, Optional, Protocol, runtime_checkable


import typing

import pytest
from contextlib import contextmanager
from unittest import mock

ImplName = typing.Literal["default_config"]

T = typing.TypeVar("T", bound=typing.Callable[..., typing.Any])
CLS = typing.TypeVar("CLS", bound=type)


IV2_FnClassOptionalOutput = str

@runtime_checkable
class IV2_FnClassOptional(Protocol):
    """
    This is the interface for a function.

    Args:
        input: Optional[OptionalClassv2]

    Returns:
        str
    """

    async def __call__(self, *, input: Optional[OptionalClassv2] = None) -> str:
        ...

   

@runtime_checkable
class IV2_FnClassOptionalStream(Protocol):
    """
    This is the interface for a stream function.

    Args:
        input: Optional[OptionalClassv2]

    Returns:
        AsyncStream[str, str]
    """

    def __call__(self, *, input: Optional[OptionalClassv2] = None
) -> AsyncStream[str, str]:
        ...
class BAMLV2_FnClassOptionalImpl:
    async def run(self, *, input: Optional[OptionalClassv2] = None) -> str:
        ...
    
    def stream(self, *, input: Optional[OptionalClassv2] = None
) -> AsyncStream[str, str]:
        ...

class IBAMLV2_FnClassOptional:
    def register_impl(
        self, name: ImplName
    ) -> typing.Callable[[IV2_FnClassOptional, IV2_FnClassOptionalStream], None]:
        ...

    async def __call__(self, *, input: Optional[OptionalClassv2] = None) -> str:
        ...

    def stream(self, *, input: Optional[OptionalClassv2] = None
) -> AsyncStream[str, str]:
        ...

    def get_impl(self, name: ImplName) -> BAMLV2_FnClassOptionalImpl:
        ...

    @contextmanager
    def mock(self) -> typing.Generator[mock.AsyncMock, None, None]:
        """
        Utility for mocking the V2_FnClassOptionalInterface.

        Usage:
            ```python
            # All implementations are mocked.

            async def test_logic() -> None:
                with baml.V2_FnClassOptional.mock() as mocked:
                    mocked.return_value = ...
                    result = await V2_FnClassOptionalImpl(...)
                    assert mocked.called
            ```
        """
        ...

    @typing.overload
    def test(self, test_function: T) -> T:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the V2_FnClassOptionalInterface.

        Args:
            test_function : T
                The test function to be decorated.

        Usage:
            ```python
            # All implementations will be tested.

            @baml.V2_FnClassOptional.test
            async def test_logic(V2_FnClassOptionalImpl: IV2_FnClassOptional) -> None:
                result = await V2_FnClassOptionalImpl(...)
            ```
        """
        ...

    @typing.overload
    def test(self, *, exclude_impl: typing.Iterable[ImplName] = [], stream: bool = False) -> pytest.MarkDecorator:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the V2_FnClassOptionalInterface.

        Args:
            exclude_impl : Iterable[ImplName]
                The names of the implementations to exclude from testing.
            stream: bool
                If set, will return a streamable version of the test function.

        Usage:
            ```python
            # All implementations except the given impl will be tested.

            @baml.V2_FnClassOptional.test(exclude_impl=["implname"])
            async def test_logic(V2_FnClassOptionalImpl: IV2_FnClassOptional) -> None:
                result = await V2_FnClassOptionalImpl(...)
            ```

            ```python
            # Streamable version of the test function.

            @baml.V2_FnClassOptional.test(stream=True)
            async def test_logic(V2_FnClassOptionalImpl: IV2_FnClassOptionalStream) -> None:
                async for result in V2_FnClassOptionalImpl(...):
                    ...
            ```
        """
        ...

    @typing.overload
    def test(self, test_class: typing.Type[CLS]) -> typing.Type[CLS]:
        """
        Provides a pytest.mark.parametrize decorator to facilitate testing different implementations of
        the V2_FnClassOptionalInterface.

        Args:
            test_class : Type[CLS]
                The test class to be decorated.

        Usage:
        ```python
        # All implementations will be tested in every test method.

        @baml.V2_FnClassOptional.test
        class TestClass:
            def test_a(self, V2_FnClassOptionalImpl: IV2_FnClassOptional) -> None:
                ...
            def test_b(self, V2_FnClassOptionalImpl: IV2_FnClassOptional) -> None:
                ...
        ```
        """
        ...

BAMLV2_FnClassOptional: IBAMLV2_FnClassOptional